# DeckSync - Visual TCG Tool

![Build Version](https://img.shields.io/badge/Build-2026.4.12-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production-success)

**DeckSync** es una herramienta web ligera para comparar decks de Pokémon TCG. Permite pegar dos listas de cartas y obtener automáticamente las diferencias, el núcleo compartido y las cartas exclusivas de cada deck.

**[Abrir DeckSync →](https://willyperic0.github.io/Decksync/)**

## Características

- Comparación automática entre dos decks
- Identificación clara de cartas exclusivas y compartidas
- Soporte para múltiples copias de una misma carta
- Vistas Grid (con imágenes) y List
- Diseño totalmente responsive
- Carga de imágenes desde Pokémon TCG API con fallback a Limitless TCG
- Sin dependencias externas

## Inicio Rápido

### Usar online
Abre directamente: **[https://willyperic0.github.io/Decksync/](https://willyperic0.github.io/Decksync/)**

### Ejecutar localmente

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

Abre `http://localhost:8000` en tu navegador.

## Cómo Usar

### Formato recomendado

```
1 Pikachu ex 25
2 Charizard ex 1
3 Blastoise ex 5
```

1. Pega el **Deck Alpha** en el primer campo.
2. Pega el **Deck Beta** en el segundo campo.
3. Pulsa **Sincronizar Decks**.
4. Cambia entre vista de cuadrícula e lista según prefieras.

## Estructura del Proyecto

```
Decksync/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Desarrollo

### Requisitos
- Navegador moderno
- No requiere instalación ni backend

### Local

```bash
git clone https://github.com/willyperic0/Decksync.git
cd Decksync
python -m http.server 8000
```