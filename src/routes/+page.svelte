<script lang="ts">
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { tw, apply } from "twind";
  import { worker } from "../mocks/browser";

  let error: boolean = false;
  if (import.meta.env.DEV && browser) {
    worker.start();
  }

  const inputStyle = tw(apply`rounded-md border-1 border-gray-200 p-2 mb-2`);
  const handleSubmit = async (event: SubmitEvent) => {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);
    error = false;
    try {
      const response = await fetch("/login", { method: "POST", body: data });
      const statusCode = response.status;
      const result = await response.json();
      console.log("login-result", result);
      if (statusCode === 200) {
        goto("/member");
      } else {
        error = true;
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<div class={tw(apply`w-[250px] mx-auto`)}>
  <h1 class={tw(apply`text-center pb-2`)}>Welcome</h1>
  <form
    class={tw(apply(`flex flex-col items-center`))}
    id="form"
    on:submit|preventDefault={handleSubmit}
  >
    <input class={inputStyle} type="text" name="account" required />
    <input class={inputStyle} type="password" name="password" required />
    {#if error}
      <p class={tw(`text-red-500 py-2`)}>incorrect account or password</p>
    {/if}
    <button
      class={tw(apply`bg-gray-800 rounded-md text-white w-20 p-2`)}
      type="submit">submit</button
    >
  </form>
</div>

<style>
  :global(body) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
