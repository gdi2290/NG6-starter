class AboutController {
  constructor() {
    this.name = 'about';

    var vPageView = new ADRUM.events.VPageView({
      url: 'https://ui-perf-appd.herokuapp.com/customView'
    });

    vPageView.start();

  // SPA view routing and HTML partials fetching
    vPageView.markViewChangeStart();
  // AJAX requests for the HTML partials are automatically correlated with the VPageView
  setTimeout(function (){
    vPageView.markViewChangeEnd();

  // HTML partials inserted into Browser DOM tree

    vPageView.markViewDOMLoaded();

  // SPA HTML AJAX data fetching
  // Data AJAX requests are automatically correlated with the VPageView


    vPageView.markXhrRequestsCompleted();

  // call this when ending a new virtual page
    vPageView.end();

    ADRUM.report(vPageView);
  }, 2000);


    }
}

export default AboutController;
