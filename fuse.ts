import { fusebox, sparky } from 'fuse-box'
class Context {
	isProduction
	runServer
	getConfig() {
		return fusebox({
			entry: 'index.tsx',
			target: 'browser',
			webIndex: false,
		})
	}
}
const { rm, task } = sparky(Context)

const bundles = {
	app: { path: 'example.js' },
}

task('default', async ctx => {
	rm('./dist')
	ctx.runServer = true
	const fuse = ctx.getConfig()
	await fuse.runDev({ bundles })
})

task('preview', async ctx => {
	rm('./dist')
	ctx.isProduction = true
	ctx.runServer = true
	const fuse = ctx.getConfig()
	await fuse.runProd({ uglify: false, bundles })
})

task('dist', async ctx => {
	rm('./dist')
	ctx.runServer = false
	ctx.isProduction = true
	const fuse = ctx.getConfig()
	await fuse.runProd({ uglify: true, bundles })
})