import React from "react";
import Staff from "../../components/components/staff";
import { useSelector } from "react-redux";

function StaffList() {
  const staff = useSelector((state) => state.staff);
  if (!staff.length) {
    console.log(staff);
    return <div>No staff</div>;
  }
  return (
    <>
      {console.log(staff)}
      <div>
        <h2>Staff</h2>
        {staff.map((st) => {
          return <Staff staff={st.data} id={st.id} key={st.id} />;
        })}
      </div>
    </>
  );
}

export default StaffList;
