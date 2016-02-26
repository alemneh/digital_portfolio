  page.base('');

  page('/', aboutController.index);
  page('/about', aboutController.index);
  page('/portfolio', examplesController.index);
  page('/contact', contactController.index);

  //page('*', notFound);




  page();
