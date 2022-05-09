<svelte:head>
	<title>glub</title>
</svelte:head>

<div class="container">
	<nav>
		<img src="img/glub.svg" alt="glub logo" class="logo" />
		<div class="title"><h1>openGL's Ultimate Boilerplate</h1></div>
	</nav>

	<slot></slot>
</div>

<style lang="scss">

	.container {
		max-width: 1320px;
		margin: 32px auto 72px;
		position: relative;
	}

  .logo {
    max-height: 90px;
	  display: inline-block;
	  top: 0;
	  vertical-align: middle;
  }

  .title {
	  margin-left: 24px;
	  display: inline-block;
	  vertical-align: middle;
  }

  nav {
	  position: relative;
	  margin-bottom: 80px;
  }

  h1 {
	  margin: 0;
    font-size: 56px;
    font-weight: 300;
	  line-height: 90px;
  }

  :global {
	  body {
		  background-color: $background;
		  color: $text-main;
		  font-family: 'Share Tech Mono', monospace !important;
	  }

    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar {
      width: 6px;
      background-color: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: $text-main;
    }

    input[type="text"] {
      background-color: $background;
      border: none;
      border-bottom: 2px solid $text-main;
      outline: none;
      transition: border-bottom-color 180ms ease;
      color: $text-main;
      margin: 4px 0;
      font-family: 'Share Tech Mono', monospace !important;
	    font-size: 16px;

	    &:active, &:focus {
		    border-bottom-color: $blue;
	    }
    }

	  select {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      border-bottom: 2px solid $text-main;
      outline: none;
      transition: border-bottom-color 180ms ease;
      color: $text-main;
      margin: 4px 0;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 16px;

      option {
        background-color: $background;
      }
	  }

	  button {
      background-color: rgba(0, 0, 0, 0);
		  border: 2px solid $text-main;
		  outline: none;
		  color: $text-main;
		  padding: 14px 24px;
      transition: all 180ms ease;
		  border-radius: 6px;
      font-family: 'Share Tech Mono', monospace !important;
		  font-size: 18px;
		  font-weight: 500;
		  cursor: pointer;

		  &:hover {
			  border-color: $blue;
			  color: $blue;
		  }
	  }

    .vcenter {
      position: relative;
      display: inline-block;
      top: 50%;
      transform: translateY(-50%);
    }

	  .code {
		  margin: 8px;
		  padding: 6px 12px;
			background-color: $light-gray;
		  border-radius: 6px;
		  width: fit-content;
	  }
  }

</style>
