import './main.css'

export default function Button({test, click}) {
  return (
    <button onClick={click} className="btn">
      {test}
    </button>
  )
}
