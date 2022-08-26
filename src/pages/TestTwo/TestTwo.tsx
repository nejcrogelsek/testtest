import { FC, useEffect, useState } from 'react'

const TestTwo: FC = () => {
  const [sentence, setSentence] = useState('today is a beautiful DAY here in trondheim. bye!')

  const uppercaseEveryWord = () => {
    const words = sentence.toLowerCase().split(' ')
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      words[wordIndex] = words[wordIndex][0].toUpperCase() + words[wordIndex].substring(1)
    }
    const result = words.join(' ')
    setSentence(result)
  }

  useEffect(() => {
    uppercaseEveryWord()
  }, [])

  return (
    <div className="test-two">
      <h1>TEST 2 - Vanilla JS</h1>
      <p>
        <b>Old sentence:</b> today is a beautiful DAY here in trondheim. bye!
      </p>
      <p>
        <b>New sentence:</b> {sentence}
      </p>
    </div>
  )
}

export default TestTwo
