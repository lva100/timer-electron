import { app } from 'electron'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'

export class Storage {
	constructor() {
		this.directory = path.join(app.getPath('userData'), 'storage')
		if (!existsSync(this.directory)) {
			mkdirSync(this.directory)
		}
	}

	get(key) {
		return this.read(key)
	}

	set(key, data) {
		return this.write(key, data)
	}

	read(key) {
		return JSON.parse(readFileSync(this.file(key)).toString('utf8'))
	}

	write(key, data) {
		return writeFileSync(this.file(key), JSON.stringify(data))
	}

	file(key) {
		const file = path.join(this.directory, `${key}.json`)
		if (!existsSync(file)) {
			writeFileSync(file, '', { flag: 'wx' })
		}
		return file
	}
}
