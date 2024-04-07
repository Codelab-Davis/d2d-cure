import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        // Your Firebase project's admin SDK configuration
        // Replace these with your actual config values
        projectId: "d2dcure-3f3df",
        clientEmail: "firebase-adminsdk-zrsxv@d2dcure-3f3df.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDy2neDa/GGO+mw\ngNcmHLvC8SSvKDd6VXfOONzGTISuvsKGgd0uDJ/1ymU9+oAkdpNiKHoSj92bDW3P\nZO803mh9Uf1MybBdP86ikkzNNbPMOeIui2elL8Np4PD8oCAIpaWLttw1DCRG7MH3\nt2b6qSmv/QYG2fCAcWlGJQ20qQxrmuuUDAe5bRiosVrsRv2Q/LjGNR7cjBjTPwep\npo/zqF98dn4cr1GjS/cQbp7O5HpW9KqHMokyzFvmEWvi8Cd9/9kLm8b4ORGIJzHi\nipn3L/jKvxb94anAPK09LNqh0rDYzJgkksEJZkTkVG9dn7LG7HxJgMGlr/sRXoY/\nF3Xa4I3TAgMBAAECggEAG73uIiKuE/37G5EUQsPMhR/j52hqMfzac0HWooZyL74V\n3aSvHggOK9dDinl3svKisndaPo2VrJUzopnuo3T2rb40d9WgYn6b/cFFqbmFQQKp\nvlRpchrLMWijTtCB6Er35sZsUFkDOeDo5YHbby3s17BJRHYX/aw28O7hqm4XP6FZ\naLFgITWzss8GMieib/GTVHNnE/n0UBXTK7x8UyNFTa7H4+iiunz/NdYST+UDeHTs\nKOww0X2qsfBtYq8pvx2On/BPz9LDqDc3METGqq+PwK7haNU8YCNZymkipj+qwIyI\nnkjO4VV+1C5wQNuBdKte/spNkOwqTXNHwDthl/FtTQKBgQD76vNC5XZtp+CnNRCB\nPc3kTTjhvcEULXodTVdUwb/XMtVrJlokwOib6uLDFcjC2f6lVsR+S8OuORaoP7XJ\nb6qMtFD8AaWP35gD3RSB5SuFP5OWnihfzJ00GrEE7iFKTQbvcGTlN1qFUxg8smsS\nFvgKR7Cro9uoHwnvuCd1Vsp9xwKBgQD2yeoDb5cYrtNM+JUIBoR+80Z98NniDtzK\ntgxyUBlhvAZ5/CUcFySixgfGhf4tTsAS6Bh+78VthcD7GQ/ZMwfw8C39/pNALQjd\nlBKA7if/wFsDF/pax6P9RZq6UNeCv9dVAD+IJAhJ/8/wbFRVLdUIHfquPCzQC203\n8ZHaNOPflQKBgEvTJjFGe+T5mMb7U+Jyxdwn2i0oPktifNUBCH48aw/M/yvnOU7C\nucDkbCioD+uGTf1aJn6VM2rnSAiQVJkzATSkuZOAs2KgvFK9YoTOg9Dxl+zH4gMj\nxVV/izSesGp60NGVFOlhRd/HaQ4r7cpeG36MoYKoKV9rKER9O3M4Em7VAoGAIWik\nLWLl6YmBQWJFipiXRzhXyqTYWin46dhLRw5g4UI6/jiMLYlUhFSaqN1q02ddyTFy\nX3zGFVWOEnAKHTUzVgKttzzHYmC2Woi5GIslDxJTP8/3LGLqaFcL4z0eb6zY0cD+\n2MdH9/yRgdKod/+EX1zvmra6uk9RsckaHZgbYSECgYAknxdb3q3GW2XiGkmaylSq\nzFpD3gTFVso7Iv+GDL+2q0pdd6gv4Yar1hX3u5y7f8+QgK7bydWoSC6NWAhhihyl\neFApcraHJnQfY1s66/jZUdY5bOx+c+Djv5Ol9fd4es+J1+MkZ+ary/ErkU9R3RfO\nNyaBN8T2wciEKnliU6Alvw==\n-----END PRIVATE KEY-----\n",
    }),
      // databaseURL: "https://your-database-url.firebaseio.com", // If you are using Firebase Realtime Database
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin;