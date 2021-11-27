fmt:
	deno fmt ./

check:
	git status
	echo "Checked the status!"
	deno fmt --check ./
	echo "Checked the Format"
	echo "Can you upload!"

run:
	echo "deno run -A --unstable --import-map=./import-map.json ./src/denoup.ts"
	deno run -A --unstable --import-map=./import-map.json ./src/denoup.ts -h
