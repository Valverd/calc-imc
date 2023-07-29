import styles from './App.module.css'
import { useEffect, useState } from 'react'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateIMC } from './helpers/imc'
import { GridItem } from './components/GridItem/GridItem'

const App = () => {

  const [heightField, setHeightField] = useState()
  const [weightField, setWeightField] = useState()
  const [toShow, setToShow] = useState(null)
  const [disableFields, setDisableFields] = useState(false)

  const handleCalculate = () => {
    // Caso estejam os dois campos inseridos dos inputs o cálculo é realizado e retornado o objeto para o toShow, e o disable dos inputs fica ativo
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField))
      setDisableFields(true)

    } else {
      alert('Digite todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setDisableFields(false)
  }


  return (
    <div>
      <header>
        <img src={poweredImage} alt="título imc" width={50} />
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. EX: 1.5 (em metros)"
            value={heightField >= 0 ? heightField : ''}
            onChange={e => { setHeightField(e.target.value) }}
            disabled={disableFields}
          />
          <input
            type="number"
            placeholder="Digite a seu peso. EX: 80.5 (em kg)"
            value={weightField >= 0 ? weightField : ''}
            onChange={e => { setWeightField(e.target.value) }}
            disabled={disableFields}
          />
          <button onClick={handleCalculate} disabled={disableFields}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            // toShow sendo vazio retorna todos os objetos do levels
            <div className={styles.grid}>
              {levels.map((item, key) => {
                return (

                  <GridItem key={key} item={item} />
                )
              })}
            </div>
          }

          {toShow &&
            // toShow povoado retorna o resultado do calculo imc com o objeto apropriado de levels
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt='left arrow' width={25} />
              </div>
              <GridItem item={toShow} />
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default App