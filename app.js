document.addEventListener('DOMContentLoaded', function() {
    const produits = [
        { nom: 'Produit 1', prix: '20€', description: 'Description du produit 1' },
        { nom: 'Produit 2', prix: '30€', description: 'Description du produit 2' },
        { nom: 'Produit 3', prix: '40€', description: 'Description du produit 3' },
    ];

    const produitsSection = document.getElementById('produits');

    produits.forEach(produit => {
        const produitDiv = document.createElement('div');
        produitDiv.classList.add('produit');
        produitDiv.innerHTML = `
            <h2>${produit.nom}</h2>
            <p>${produit.description}</p>
            <p><strong>${produit.prix}</strong></p>
            <button>Ajouter au Panier</button>
        `;
        produitsSection.appendChild(produitDiv);
    });
});
