# SAX Bolivia Website

A modern website for SAX Bolivia, inspired by the original sax.com.bo site.

## Technologies

- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **SCSS** - Styling with variables and modules
- **Tailwind CSS** - Utility-first CSS framework (for Shadcn/UI)
- **Shadcn/UI** - Component library (custom components)
- **React Router DOM** - Client-side routing
- **i18n** - Multi-language support (Spanish, English, French)

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   └── Home.tsx
├── styles/          # SCSS stylesheets
│   ├── variables.scss
│   ├── global.scss
│   ├── Navbar.scss
│   ├── Footer.scss
│   └── Home.scss
├── utils/           # Utility functions and contexts
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── App.tsx          # Main app component
└── main.tsx         # Entry point

public/
└── assets/          # Public images (img1.jpg, img2.jpg, etc.)
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install additional required dependencies:
```bash
npm install react-router-dom sass class-variance-authority clsx tailwind-merge lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. Add images to `public/assets/`:
   - `img1.jpg`
   - `img2.jpg`
   - `img3.jpg`
   - `img4.jpg`

4. Add logo to `public/`:
   - `logo.png`

5. Add social media icons to `public/social/`:
   - `whatsapp.svg`
   - `facebook.svg`
   - `twitter.svg`
   - `x.svg`

## Development

Run the development server:
```bash
npm run dev
```

## Build

Build for production:
```bash
npm run build
```

## Color Palette

- `#0F172A` - Navy Deep (Azul navy profundo)
- `#334155` - Blue Gray (Azul grisáceo)
- `#E31E24` - Red Primary (Rojo principal)
- `#F1F5F9` - Gray Light (Gris muy claro)
- `#94A3B8` - Gray Blue (Gris azulado)
- `#111827` - Blue Black (Azul casi negro)
- `#1F2D3A` - Blue Base (Azul base)
- `#C4161C` - Red Darker (Rojo más oscuro)
- `#D1D5DB` - Gray Soft (Gris suave)
- `#F9FAFB` - White Warm (Blanco cálido)

## Contact Form

The contact form uses **Web3Forms** to send emails directly to `mauricio16pc@gmail.com` without opening the user's email client. 

### Setup (One-time configuration):

1. Go to [Web3Forms](https://web3forms.com/)
2. Enter your email: `mauricio16pc@gmail.com`
3. Click "Get Your Access Key"
4. Copy the access key you receive
5. Open `src/pages/ContactUs.tsx`
6. Replace `YOUR_WEB3FORMS_ACCESS_KEY` on line ~175 with your access key

**That's it!** No API keys needed, no complex setup. The form will send emails directly to `mauricio16pc@gmail.com` with:
- HTML email format with logo
- Sender's name and email
- Message content
- Automatic timestamp

**Note:** Web3Forms is free and doesn't require any backend or server configuration.

## Features

- **Responsive Design** - Works on all screen sizes
- **Dark/Light Theme** - Toggle between themes
- **Multi-language Support** - Spanish, English, French (translates entire page)
- **Image Gallery** - Auto-rotating carousel (3 second intervals)
- **Navigation** - React Router for client-side routing
- **Shadcn/UI Components** - Custom dropdown menu and UI components
- **Complete i18n System** - All content is translated when language changes
- **Contact Form** - Email sending with CAPTCHA validation and HTML email with logo

## Code Standards

- All code, logs, and comments are in English
- Component logic and structure are separated
- SCSS modules for component-specific styles
- TypeScript for type safety
