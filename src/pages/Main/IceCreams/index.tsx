import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const iceCreamsRequest = await getIceCreams()

      setIceCreams(iceCreamsRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
