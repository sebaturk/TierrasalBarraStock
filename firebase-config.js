// ⚠️ PASO 2 del README: reemplazá estos valores por los de TU proyecto de Firebase de Tierrasal
// (un proyecto NUEVO, distinto al de Barra).
// Los encontrás en: Firebase Console > ⚙️ Configuración del proyecto > "Tus apps" > SDK setup and configuration.
// Estas claves no son secretas (están pensadas para estar en el navegador); la seguridad real
// la dan el login (Authentication) y las reglas de Firestore que configurás en el paso 4.
//
// IMPORTANTE: dejá la última línea como está: firebase.initializeApp(firebaseConfig);
// (con "firebase." adelante). Si Firebase te muestra "const app = initializeApp(...)", NO la copies.

const firebaseConfig = {
  apiKey: "AIzaSyDlY0sKr7-ismEcEu4ajLsI-4fu5j2jnAs",
  authDomain: "tierrasalbarrastock.firebaseapp.com",
  projectId: "tierrasalbarrastock",
  storageBucket: "tierrasalbarrastock.firebasestorage.app",
  messagingSenderId: "795439032131",
  appId: "1:795439032131:web:088a3f0ef8cb11ead2f1f6"
};

firebase.initializeApp(firebaseConfig);
