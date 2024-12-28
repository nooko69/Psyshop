document.addEventListener('DOMContentLoaded', function() {
    const produits = [
        { nom: 'Lampe Champignon', prix: 20, description: 'Lampe décorative en forme de champignon', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1574169208507-843761748a4c' },
        { nom: 'Litière de Tofu pour Chats', prix: 15, description: 'Litière écologique pour chats', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1555685812-4b7439e7c5a6' },
        { nom: 'Bandes de Résistance Personnalisées', prix: 25, description: 'Bandes de résistance pour le fitness', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783' },
        { nom: 'Diffuseur d\'Huiles Essentielles', prix: 35, description: 'Diffuseur d\'huiles essentielles pour la relaxation', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1605472277985-840614d59761' },
        { nom: 'Chargeur Sans Fil', prix: 30, description: 'Chargeur sans fil innovant', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
        { nom: 'Stylos Recyclés', prix: 10, description: 'Stylos fabriqués à partir de matériaux recyclés', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
        { nom: 'Interrupteur Connecté', prix: 40, description: 'Interrupteur intelligent pour la maison connectée', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de71c6b' },
        { nom: 'Sac de Voyage Antitache', prix: 50, description: 'Sac de voyage innovant et antitache', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267' },
        { nom: 'Bijoux Personnalisés', prix: 45, description: 'Bijoux personnalisés avec gravure', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3' },
        { nom: 'Ustensiles de Cuisine Multifonctions', prix: 25, description: 'Ustensiles de cuisine innovants', lien: 'https://fr.aliexpress.com/item/1005002754562453.html', image: 'https://images.unsplash.com/photo-1506368083636-6defb67639f2' }
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
