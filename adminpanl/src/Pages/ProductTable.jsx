import React, { useEffect, useState } from 'react';
import "../css/Table.css";
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import Swal from 'sweetalert2';

const ProductTable = () => {

  const [productarr, setProductarr] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ brand: '', name: '', price: '', des: '', img: '' });

  const productCollection = collection(db, "product");

  const getData = async () => {
    let Data = await getDocs(productCollection);
    let arr = Data.docs.map((el) => {
      return { id: el.id, ...el.data() };
    });
    setProductarr(arr);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = doc(db, "product", id);
    await deleteDoc(data);
    Swal.fire('Product Deleted Successfully');
    getData();
  }

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setFormData({ brand: product.brand, name: product.name, price: product.price, des: product.des, img: product.img });
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }

  const handleSave = async () => {
    if (editingProduct) {
      const productDoc = doc(db, "product", editingProduct);
      await updateDoc(productDoc, formData);
      Swal.fire('Product Updated Successfully');
      setEditingProduct(null);
      setFormData({ brand: '', name: '', price: '', des: '', img: '' });
      getData();

      const modalElement = document.getElementById('editModal');
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="table1">
        <div className="t-1">
          <table className="table text-center table-bordered border-success">
            <thead>
              <tr>
                <th scope="col" className='text-light'>Brand</th>
                <th scope="col" className='text-light'>Name</th>
                <th scope="col" className='text-light'>Price</th>
                <th scope="col" className='text-light'>Description</th>
                <th scope="col" className='text-light'>Image</th>
                <th scope="col" className='text-light'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                productarr.map((el) => (
                  <tr key={el.id}>
                    <td className='text-light text-center'>{el.brand}</td>
                    <td className='text-light text-center'>{el.name}</td>
                    <td className='text-light text-center'>{el.price}</td>
                    <td className='text-light text-center w-25 ms-5'>{el.des}</td>
                    <td>
                      <img src={el.img} alt={el.name} style={{ width: "100px", height: "100px" }} />
                    </td>
                    <td>
                      <button className='btn border border-success text-light mt-2 ms-4 w-50' onClick={() => handleDelete(el.id)}>Delete</button>
                      <button className='btn border border-success text-light ms-4 mt-3 w-50' onClick={() => handleEdit(el)}>Edit</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* Bootstrap Modal */}
        <div className="modal fade " id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header table-bordered border-success">
                <h5 className="modal-title text-light" id="editModalLabel">Edit Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body table-bordered border-success">
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="form-control mb-2 table-bordered border-success text-success fw-bold mt-2" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-control mb-2 table-bordered border-success text-success fw-bold mt-4" />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-control mb-2 table-bordered border-success text-success fw-bold mt-4" />
                <textarea name="des" value={formData.des} onChange={handleChange} placeholder="Description" className="form-control mb-2 table-bordered border-success text-success fw-bold mt-4"></textarea>
                <input type="text" name="img" value={formData.img} onChange={handleChange} placeholder="Image URL" className="form-control mb-2 table-bordered border-success text-success fw-bold mt-4" />
              </div>
              <div className="modal-footer table-bordered border-success">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={handleSave}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTable;
