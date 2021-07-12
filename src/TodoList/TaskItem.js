import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (

            <tr>
                <td>1</td>
                <td>Học Reactjs</td>
                <td className="text-center" >
                    <span className="label label-danger"> Kích hoạt </span>
                </td>
                <td className="text-center" >
                    <button className="label label-warning">
                        <span className="fa fa-pencil mr-5"></span> Sửa </button>
                    &nbsp;
                    <button className="label label-danger">
                        <span className="fa fa-trash mr-5"></span> Xóa </button>
                </td>
            </tr>

        );
    }
}

export default TaskItem;
