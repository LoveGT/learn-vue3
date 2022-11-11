import './style.css'
const test = ref<string>('tsx-v-model')
const flag = ref<boolean>(true)
const list = ref([1, 2, 3, 4, 5])
const changeFlag = () => {
	flag.value = !flag.value
}

interface IProps {
	title: string
}
const tsxComp = (props: IProps, cxt: any) => {
	const itemClick = (item: number) => {
		cxt.emit('on-item', item)
	}
	return (
		<>
			<div>hello tsx {test.value}</div>
			<input v-model={test.value}></input>
			<div className="flag" v-show={flag.value}>
				1111 {test.value} {flag.value + ''}
			</div>
			{flag.value ? <div>true</div> : <div>flase</div>}
			<button onClick={changeFlag}>changeFlag</button>
			<ul>
				{list.value.map((item) => (
					<li key={item} onClick={() => itemClick(item)}>
						{item}
					</li>
				))}
			</ul>
			<div>{props.title}11111</div>
		</>
	)
}

export default tsxComp
