<svelte:head>
	<title>glub</title>
</svelte:head>

<div class="container">
	<nav>
		<img src="img/glub.svg" alt="glub logo" class="logo" />
		<div class="title"><h1>openGL's Ultimate Boilerplate</h1></div>
	</nav>

	<slot></slot>

	<div class="footer">
		<a href="https://drgy.dev/" target="_blank">
			<img src="img/drgy-logo.svg" />
			<div>Copyright © 2023, Jakub Drgoň</div>
		</a>
	</div>
</div>

<style lang="scss">

	.footer {
		padding: 40px 0;

		a {
      color: $text-main;
			text-decoration: none;
		}

		img {
			height: 60px;
			width: auto;
			margin-right: 12px;
		}

		div {
			position: relative;
			display: inline-block;
			top: -20px;
		}
	}

	.container {
		max-width: 1320px;
		margin: 0 auto;
		position: relative;

		@media (max-width: $lg-max) {
			padding: 20px 20px 40px;
    }
	}

  .logo {
    max-height: 90px;
	  display: inline-block;
	  top: 0;
	  vertical-align: middle;

	  @media (max-width: $lg-max) {
		  margin: 0 auto;
		  display: block;
	  }
  }

  .title {
	  margin-left: 24px;
	  display: inline-block;
	  vertical-align: middle;

	  @media (max-width: $lg-max) {
		  text-align: center;
		  margin: 40px 0 0;
		  width: 100%;
	  }
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

	  @media (max-width: $lg-max) {
		  font-size: 40px;
		  line-height: 40px;
	  }
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
