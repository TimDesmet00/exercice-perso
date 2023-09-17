<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données JSON du formulaire
    $userJSON = $_FILES['userJSON']['tmp_name'];

    // Définir le chemin du fichier de destination
    $destination = 'data/users.json';

    // Déplacer le fichier JSON vers le répertoire de destination
    if (move_uploaded_file($userJSON, $destination)) {
        // Répondre avec un code HTTP 200 (OK)
        http_response_code(200);
    } else {
        // Répondre avec un code HTTP 500 (Erreur interne du serveur)
        http_response_code(500);
    }
} else {
    // Répondre avec un code HTTP 405 (Méthode non autorisée)
    http_response_code(405);
}
?>
