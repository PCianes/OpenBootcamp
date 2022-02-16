import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Todoform from '../pure/TodoForm'

const mapStateToProps = () => { }

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            const action = addTodo(text)
            dispatch(action)
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainer
