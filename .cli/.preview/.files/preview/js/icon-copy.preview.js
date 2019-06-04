/**
 * @file Darvin Copy Icon
 * @author Tobias Frei
 *
 * @module icon
 */

import createModule from '@js/libs/create-module';

export default createModule({
  options: () => ({
    container: '.m-prev-icons',
    icon: '.m-prev-flexgrid__iconbox'
  }),

  /**
   * createButton
   * @param {Object} module - Module
   * @param {Element} module.el - Element
   * @param {Object} module.state - State
   * @param {Object} module.options - Options
   * @return {Object} state
   */
  constructor({ el, state, options }) {
    let container,
        icons;

    // Private Functions
    const copyIcon = (e) => {
      var copyText = e.currentTarget.querySelector('input');
      copyText.select();
      document.execCommand("copy");
    };

    /* --- Public methods --- */

    /**
     * init
     * @return {undefined}
     */
    state.init = () => {
      container = el;
      if(!container) return;

      icons = document.querySelectorAll(options.icon);

      [...icons].forEach((icon) => {
        icon.addEventListener('click', copyIcon);
      });
    };

    state.init();

    return state;
  },
});
