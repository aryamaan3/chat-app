# backend du chat app

## api
- get : tous les messages dans le bd
- post: ajout de message dans le bd

## post

lors du post la collections dans le bd est modifié, nous voulons qu'à ce moment ceci soit envoyé front, pour qu'il l'affiche.
Afin d'accomplir cela nous utilisons pusher qui ecoute la collection et trigger quand il y a un changement, dés ceci il envoi la nouvelle partie du collection au front qui est en train d'ecouter sur pusher

<img width="693" alt="Screenshot 2021-03-25 at 14 57 22" src="https://user-images.githubusercontent.com/71285263/112484642-68e07880-8d7a-11eb-9192-2cb3fae8997e.png">
