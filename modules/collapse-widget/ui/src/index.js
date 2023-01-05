export default () => {
  apos.util.widgetPlayers['collapse'] = {
    selector: '[data-collapse-widget]',
    player: function(el) {
     // Find our button
     const btn = el.querySelector('[data-collapser-button]');
     // Find our hidden text
     const target = el.querySelector('[data-collapser-detail]');

     btn.onclick = () => {
       const expanded = btn.getAttribute('aria-expanded') === 'true';
       // Update the button's aria attribute
       btn.setAttribute('aria-expanded', !expanded);
       // Update the `hidden` attribute on the detail
       target.hidden = expanded;
     };
    }
  };
};