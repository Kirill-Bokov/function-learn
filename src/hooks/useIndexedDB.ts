const useIndexedDB = () => {
    return {
      cards: [
        { id: "1", title: "Тестовая тема", description: "Описание темы" },
        { id: "2", title: "Другая тема", description: "Ещё описание" },
        { id: "4", title: "Что такое хромиум?", description: "Ещё описание", image: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chromium/chromium_48x48.png" }
      ],
      isLoading: false
    };
  };
  
  export default useIndexedDB;
  