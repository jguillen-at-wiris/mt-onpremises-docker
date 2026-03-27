(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const options = {
      height: 480,
      toolbarButtons: ['wirisEditor', 'wirisChemistry'],
      htmlAllowedTags: ['.*'],
      htmlAllowedAttrs: ['.*'],
      htmlAllowedEmptyTags: ['mprescripts', 'none'],
      // mathTypeParameters: {
      //   serviceProviderProperties: {
      //     URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
      //     server: 'java',
      //   },
      // },
      imageEditButtons: ['wirisEditor', 'wirisChemistry'],
    };

    window.froala = new FroalaEditor('#editor', options);
  });
})();
