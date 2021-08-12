import React from 'react'
import { mount } from 'enzyme'
import { LoginScreem } from '../../../components/09-useContext/LoginScreem'
import { UserContext } from '../../../components/09-useContext/UserContext'


describe('Pruebas en <LoginScreem/>', () => {

   const setUser = jest.fn()

   const wrapper = mount(
      <UserContext.Provider value={{ setUser }}>
         <LoginScreem />
      </UserContext.Provider>
   )

   test('Debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot()
   })

   test('Debe de ejecutar el setUser con el argumento esperado ', () => {

      wrapper.find('button').prop("onClick")()

      expect(setUser).toHaveBeenCalledWith({
         id: 123,
         name: "Marlon",
         email: "marlon@gmail.com",
      })

   })


})
