document.addEventListener('DOMContentLoaded', function() {
    const produits = [
        { nom: 'Lampe Champignon', prix: 20, description: 'Lampe décorative en forme de champignon', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Lampe+Champignon' },
        { nom: 'Litière de Tofu pour Chats', prix: 15, description: 'Litière écologique pour chats', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Liti%C3%A8re+de+Tofu+pour+Chats' },
        { nom: 'Bandes de Résistance Personnalisées', prix: 25, description: 'Bandes de résistance pour le fitness', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Bandes+de+R%C3%A9sistance+Personnalis%C3%A9es' },
        { nom: 'Diffuseur d\'Huiles Essentielles', prix: 35, description: 'Diffuseur d\'huiles essentielles pour la relaxation', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Diffuseur+d%27Huiles+Essentielles' },
        { nom: 'Chargeur Sans Fil', prix: 30, description: 'Chargeur sans fil innovant', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Chargeur+Sans+Fil' },
        { nom: 'Stylos Recyclés', prix: 10, description: 'Stylos fabriqués à partir de matériaux recyclés', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Stylos+Recycl%C3%A9s' },
        { nom: 'Interrupteur Connecté', prix: 40, description: 'Interrupteur intelligent pour la maison connectée', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Interrupteur+Connect%C3%A9' },
        { nom: 'Sac de Voyage Antitache', prix: 50, description: 'Sac de voyage innovant et antitache', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Sac+de+Voyage+Antitache' },
        { nom: 'Bijoux Personnalisés', prix: 45, description: 'Bijoux personnalisés avec gravure', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Bijoux+Personnalis%C3%A9s' },
        { nom: 'Ustensiles de Cuisine Multifonctions', prix: 25, description: 'Ustensiles de cuisine innovants', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://via.placeholder.com/300?text=Ustensiles+de+Cuisine+Multifonctions' }
    ];

    const produitsSection = document.getElementById('produits');
    const panier = [];
    const listePanier = document.getElementById('liste-panier');
    const totalElement = document.getElementById('total');

    produits.forEach(produit => {
        const produitDiv = document.createElement('div');
        produitDiv.classList.add('produit');
        produitDiv.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}">
            <h2>${produit.nom}</h2>
            <p>${produit.description}</p>
            <p><strong>${produit.prix}€</strong></p>
            <button>Ajouter au Panier</button>
        `;
        produitDiv.querySelector('button').addEventListener('click', () => {
            ajouterAuPanier(produit);
        });
        produitsSection.appendChild(produitDiv);
    });

    function ajouterAuPanier(produit) {
        panier.push(produit);
        afficherPanier();
    }

    function afficherPanier() {
        listePanier.innerHTML = '';
        let total = 0;
        panier.forEach(produit => {
            const item = document.createElement('li');
            item.innerHTML = `${produit.nom} - ${produit.prix}€ <a href="${produit.lien}" target="_blank">Acheter</a>`;
            listePanier.appendChild(item);
            total += produit.prix;
        });
        totalElement.textContent = `Total: ${total}€`;
    }
});
