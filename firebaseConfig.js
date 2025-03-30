// Importa o Firebase
import { initializeApp } from "firebase/app";

// Configuração do Firebase (seus dados estão aqui)
const firebaseConfig = {
  apiKey: "AIzaSyCh6GJLcnpBN846aO0epXWfwhkxi09Sghg",
  authDomain: "panico-na-jamaica-br.firebaseapp.com",
  projectId: "panico-na-jamaica-br",
  storageBucket: "panico-na-jamaica-br.firebasestorage.app",
  messagingSenderId: "614801654292",
  appId: "1:614801654292:web:e367343a288925255add01"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o app para usar em outros arquivos
export default app;
