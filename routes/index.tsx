/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

/*export const handler: Handlers = {
  async GET(_req, ctx) {
    console.log('ABBIE STRT');
    console.log('middleware data is :', ctx.state.data);
    console.log('ABBIE END');
      }
}*/


export default function Home({ url }) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        222 URL URL URL 0-0-2  { url.href }
      </p>
      <Counter start={3} />
    </div>
  );
}
