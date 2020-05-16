<script>
  export let loggedIn;
  export let username = "dummy";
  export let loginFlow;
  let share_src = "icons/share.svg";
  let close_src = "icons/close.svg";
</script>

<style>
  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 16px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.4px;

    color: #f0f6ef;
  }
  #TopBarDivContainer {
    border-radius: 6px;
    background-color: #146cdb;
    padding-top: 1px;
  }
  #iconsDivContainer {
    margin: 1px;
    padding-bottom: 4px;
  }
  #HeaderDivContainer {
    text-align: center;

    padding: 5px;
  }

  a {
    width: 110px;
    height: 9.5px;
    font-family: Avenir;
    font-size: 7px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.18px;
    text-align: center;
    color: #f0f6ef;
  }

  img {
    width: 11px;
    height: 9.5px;
  }
  button {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    border: 0;
    background: transparent;
  }

  button:hover {
    outline: #fff solid 1px;
  }

  #buttonShareIcon {
    float: left;
    margin-left: 4px;
  }
  #buttonCloseIcon {
    float: right;
    margin-right: 4px;
  }

  #a_loggedin {
    text-decoration: none;
  }
  #a_loggedout:hover {
    font-weight: bold;
  }
  #a_loginFlow {
    font-weight: bold;
  }
</style>

<div id="TopBarDivContainer">

  <div id="iconsDivContainer">
    <button id="buttonShareIcon">
      <img src={share_src} alt="shareicon" />
    </button>

    <button id="buttonCloseIcon">
      <img src={close_src} alt="shareicon" />
    </button>
  </div>

  <div id="HeaderDivContainer">
    <p>Tab Hero</p>

    {#if loggedIn}
      <a id="a_loggedin" href="placeholder.html">Logged in as: {username}</a>
    {:else if loginFlow}
      <a id="a_loginFlow" href="placeholder.html">Login Flow</a>
    {:else}
      <a id="a_loggedout" href="placeholder.html">
        Login to sync data across devices
      </a>
    {/if}
  </div>

</div>
