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
  console.log('_middleware')
    console.log(req.url);
    console.log('_middleware end ABBIE');
  ctx.state.data = req.url;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}