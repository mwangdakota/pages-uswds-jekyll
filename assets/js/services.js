---
---
if (window.sfService) {
  console.error('window.sfService has been redefined', Date.now());
} else {
  window.sfService = {

    getAwardsHistory: async function() {
      let response = await fetch('{{ site.baseurl }}/data/awards-history.json');
      return response.json();
    },

    getAwardsHistoryAutocompleteIndex: async function() {
      let response = await fetch('{{ site.baseurl }}/data/awards-history-ac-index.json');
      return response.json();
    },

    getPitchbookData: async function() {
      let response = await fetch('{{ site.baseurl }}/data/pitchbook.json');
      return response.json();
    }
  }
}
