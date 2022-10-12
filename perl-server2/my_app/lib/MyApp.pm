package MyApp;
use Mojo::Base 'Mojolicious', -signatures;

# This method will run once at server start
sub startup ($self) {

  # Load configuration from config file
  my $config = $self->plugin('NotYAMLConfig');

  # Configure the application
  $self->secrets($config->{secrets});

  # Router
  my $r = $self->routes;

  # Normal route to controller
  #$r->get('/')->to('Example#welcome');
  #
  $r->get('/' => sub($c) {
    $c->reply->static('index.html');
      #$c->render(text => 'hello kk');
  });
  #$r->get('/')->render(text => 'hello kk');
    #$c->render(text => 'hello kk');
}

1;
