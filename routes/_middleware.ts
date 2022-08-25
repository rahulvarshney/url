// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";


interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {

  const url = req.url;

  const rExp : RegExp = /(.+\/\/)/;
  
  let domain_long = url.replace(rExp, '');

  console.log('domain long is: ', domain_long);

  let domain = domain_long.replace('\/', '');

  console.log('domain is: ', domain);
  
  console.log('_middleware')
    console.log(req.url);
    console.log('_middleware end ABBIE');
  ctx.state.data = req.url;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}