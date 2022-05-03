import { publish } from 'gh-pages';

publish(
		'build',
		{
			branch: 'gh-pages',
			repo: 'https://github.com/drgy/glub-web.git',
			user: {
				name: 'drgy',
				email: 'drgonjak@gmail.com'
			},
			dotfiles: true
		},
		() => {
			console.log('Deploy Complete!');
		}
);
