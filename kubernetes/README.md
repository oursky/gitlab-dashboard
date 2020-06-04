## to deploy with new account

either use blackbox to decrpyt the file 'kubernetes/backend/secret.yaml' and edit it or follow the below step to create the secret.yaml file then create key.

1. create a file 'secret.yaml' like 'secretExample.yaml' and copy from 'secretExample.yaml' to the newly created file.
2. get the base64 encoded form of gitlab user id by
```
echo -n "<userId>" | base64
```
for example
```
echo -n "1234567" | base64
```

3. get the base64 encoded form of gitlab user access token by
```
echo -n "<accessToken>" | base64
```
for example
```
echo -n "19835yrhq9fioeg9w8" | base64
```

4. edit from the file 'secret.yaml' by replacing the GITLAB_USER_ID's value with the base 64 encoded result from (2), and replace GITLAB_PRIVATE_TOKEN's value with the base 64 encoded result from (3)

5. create the secret by 
'''
kubectl create -f ./secret.yaml
'''