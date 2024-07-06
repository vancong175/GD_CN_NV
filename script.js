document.addEventListener("DOMContentLoaded", function() {
    const linkQuanLyNhanVien = document.getElementById("link-quan-ly-nhan-vien");
    const linkTaoMoiNhanVien = document.getElementById("link-tao-moi-nhan-vien");
    const linkDanhSachNhanVien = document.getElementById("link-danh-sach-nhan-vien");            
    const pageContentWrapper = document.getElementById("content-container");
    const employees = [];            
    
    linkQuanLyNhanVien.addEventListener("click", function(event) {
        event.preventDefault();
        pageContentWrapper.innerHTML = "<h1>Quản lý nhân viên</h1>";
    });    
    linkTaoMoiNhanVien.addEventListener("click", function(event) {
        event.preventDefault();
        pageContentWrapper.innerHTML = `
            <h1>Tạo mới nhân viên</h1>
            <form id="employeeForm">
                <div class="form-group">
                    <label for="name">Tên nhân viên</label>
                    <input type="text" class="form-control" id="name" placeholder="Nhập tên nhân viên" required>
                </div>
                <div class="form-group">
                    <label for="identity">Số căn cước công dân</label>
                    <input type="text" class="form-control" id="identity" placeholder="Nhập số căn cước" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                </div>                       
                <div class="form-group">
                    <label for="phone">Số điện thoại</label>
                    <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại" required>
                </div>                         
                <div class="form-group">
                    <label for="address">Địa chỉ</label>
                    <input type="text" class="form-control" id="address" placeholder="Nhập địa chỉ" required>
                </div>
                <button type="submit" class="btn btn-primary">Lưu</button>
            </form>
        `;
        document.getElementById("employeeForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const identity = document.getElementById("identity").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;
            employees.push({ name, identity, email, phone, address });
            alert("Nhân viên đã được lưu!");
            document.getElementById("employeeForm").reset();
        });
    });
    linkDanhSachNhanVien.addEventListener("click", function(event) {
        event.preventDefault();
        renderEmployeeList();
    });
    function renderEmployeeList() {
        let employeeTable = `
            <h1>Danh sách nhân viên</h1>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên nhân viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Số căn cước công dân</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        employees.forEach((employee, index) => {
            employeeTable += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.address}</td>
                    <td>${employee.identity}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="editEmployee(${index})">Sửa</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${index})">Xóa</button>
                    </td>
                </tr>
            `;
        });
        employeeTable += `
                    </tbody>
                </table>
            </div>
        `;
        pageContentWrapper.innerHTML = employeeTable;
    }
    window.editEmployee = function(index) {
        const employee = employees[index];
        pageContentWrapper.innerHTML = `
            <h1>Sửa thông tin nhân viên</h1>
            <form id="employeeForm">
                <div class="form-group">
                    <label for="name">Tên nhân viên</label>
                    <input type="text" class="form-control" id="name" value="${employee.name}" required>
                </div>
                <div class="form-group">
                    <label for="identity">Số căn cước công dân</label>
                    <input type="text" class="form-control" id="identity" value="${employee.identity}" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" value="${employee.email}" required>
                </div>                       
                <div class="form-group">
                    <label for="phone">Số điện thoại</label>
                    <input type="text" class="form-control" id="phone" value="${employee.phone}" required>
                </div>                         
                <div class="form-group">
                    <label for="address">Địa chỉ</label>
                    <input type="text" class="form-control" id="address" value="${employee.address}" required>
                </div>
                <button type="submit" class="btn btn-primary">Lưu</button>
            </form>
        `;
        getElementById("employeeForm").addEventListener("submit", function(event) {
            event.preventDefault();
            employee.name = getElementById("name").value;
            employee.identity = getElementById("identity").value;
            employee.email = getElementById("email").value;
            employee.phone = getElementById("phone").value;
            employee.address = getElementById("address").value;
            alert("Thông tin nhân viên đã được cập nhật!");
            renderEmployeeList();
        });
    };
    window.deleteEmployee = function(index) {
        if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
            employees.splice(index, 1);
            alert("Nhân viên đã được xóa!");
            renderEmployeeList();
        }
    };
});
