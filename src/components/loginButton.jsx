import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from "expo-auth-session"
import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const TENETID = "26be91e2-da99-4ee2-98aa-85f881cb069a"
const CLIENTID = "a07bc6d8-df92-4ff7-8215-f85953278644"

const LoginButton = (props) => {
    
    const navigation = useNavigation();
    const [discovery, $discovery] = useState({})
    const [authRequest, $authRequest] = useState({})
    const [authorizeResult, $authorizeResult] = useState({})

    const scopes = ['openid', 'profile', 'email', 'offline_access'] //Default scope, we are authenticated to grab this data from GraphQL with our access token
    const domain = `https://login.microsoftonline.com/${TENETID}/v2.0`
    const redirectUrl = AuthSession.makeRedirectUri(__DEV__ ? { scheme: 'portinos.personalCard.Mobile' } : {})

    useEffect(() => {
        const getSession = async () => {
            const d = await AuthSession.fetchDiscoveryAsync(domain)
        
            const authRequestOptions = {
                prompt: AuthSession.Prompt.Login,
                responseType: AuthSession.ResponseType.Code,
                scopes: scopes,
                usePKCE: true,
                clientId: CLIENTID,
                redirectUri: __DEV__ ? redirectUrl : redirectUrl + "validate",
            }
            const authRequest = new AuthSession.AuthRequest(authRequestOptions)
            $authRequest(authRequest)
            $discovery(d)
        }
        getSession()
      }, [])
    
    useEffect(() => {
        const getCodeExchange = async () => {
            const tokenResult = await AuthSession.exchangeCodeAsync(
                {
                    code: authorizeResult.params.code,
                    clientId: CLIENTID,
                    redirectUri: __DEV__ ? redirectUrl : redirectUrl + "validate",
                    extraParams: {
                        code_verifier: authRequest.codeVerifier || "",
                    },
                },
                discovery
            )
          const { accessToken, refreshToken, issuedAt, expiresIn } = tokenResult
          
          //console.log('token',accessToken, refreshToken, issuedAt, expiresIn)

          const response = await fetch(`https://graph.microsoft.com/oidc/userinfo`, {
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
            });

            const responseJson = await response.json();

            AsyncStorage.setItem('token', accessToken);
            AsyncStorage.setItem('user', JSON.stringify(responseJson));
            
        }
    
        if(authorizeResult && authorizeResult.type == 'error') {
          //Handle error
        }
    
        if(authorizeResult && authorizeResult.type == 'success' && authRequest && authRequest.codeVerifier) {
            getCodeExchange()
        }
        
    }, [authorizeResult, authRequest])

    return (
        
        authRequest && discovery ? 
            (
            <Pressable 
                style={styles.btn}
                onPress={async () => {
                    const authorizeResult = await authRequest.promptAsync(discovery)
                    $authorizeResult(authorizeResult)
                }}
            >
                <Text style={styles.text}>
                    Iniciar sesión
                </Text>
            </Pressable>
            ) : null
    )
}

const styles = StyleSheet.create({
    btn: {
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
    }
});

export default LoginButton;