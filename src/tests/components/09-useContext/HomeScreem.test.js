import React from 'react'
import { mount } from 'enzyme'
import { HomeScreem } from '../../../components/09-useContext/HomeScreem'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en <HomeScreem/>', () => {

   const user = {
      name: 'Marlon',
      email: 'marlon@gmail.com'
   }

   // Cómo establecer un contexto en los tests?
   // shallow renderiza el high order component, para renderizar HomeScreen usamos mount
   const wrapper = mount(
      <UserContext.Provider value={{ user }} >
         <HomeScreem />
      </UserContext.Provider>
   )

   test('Debe de mostrarse correctamente', () => {

      expect(wrapper).toMatchSnapshot()

   })


})
