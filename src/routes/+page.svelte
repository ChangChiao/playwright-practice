<script lang="ts">
  import { goto } from "$app/navigation";
  import { tw, apply } from "twind";
  const inputStyle = tw(apply`rounded-md border-1 border-gray-200 p-2 mb-2`);
  const handleSubmit = () => {
    goto("/member");
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
