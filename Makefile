verify:
	which deno || (echo "Please install deno"; exit 1)

lint: verify
	deno lint
	deno fmt --check deno/* || (echo "Please fix formatting issues before commiting changes"; exit 1)

test: verify
	deno test --allow-read