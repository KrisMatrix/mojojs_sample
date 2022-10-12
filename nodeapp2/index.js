import mojo, {yamlConfigPlugin} from '@mojojs/core';

export const app = mojo();

app.plugin(yamlConfigPlugin);
app.secrets = app.config.secrets;

//app.get('/').to('example#welcome');
app.get('/', async ctx => {
  //await ctx.sendFile(ctx.home.child('public', 'index.html'));
  //await ctx.sendFile(ctx.home.child('public/index.html'));
  console.log(ctx.urlForAsset('index.js'));
  //await ctx.sendFile(ctx.urlForAsset('index.js'));
  await ctx.sendFile(ctx.home.child('public','index.html'));
});

app.start();
