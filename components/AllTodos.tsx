import Card from '@/components/reuseable/Card'
const AllTodos = async()=>{

    const  response = await fetch('http://localhost:3000/api/add-todo',{
       cache:'no-cache',
       next: {tags:["todos"] }
    })
    const  data = await response.json()

    return <>
    
            <div className="w-full mx-auto">
            <table className="table-auto mx-auto w-[80%] border-2">
  <thead>
    <tr>
      <th scope="row" className="border-2">ID</th>
      <th scope="row" className="border-2">Title</th>
      <th scope="row" className="border-2">Description</th>
      <th scope="row" className="border-2">Status</th>
      <th scope="row" className="border-2">Actions</th>
    </tr>
  </thead>
  <tbody>
   
                {
                    data && data.total>0 && data.todos.map((c:any,i:any)=>{
                        return <Card key={i} id={i+1} title={c.title} desc={c.desc} 
                        isComplete={c?.isComplete} _id={c._id} />
                    })
                }

 
  </tbody>
</table>
            </div>
    </>
}

export default AllTodos