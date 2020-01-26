package exam.hello;

import javax.persistence.*;

@Entity
@Table(name= "profile")
public class ProfileEntity {
	
	@Id
	@Column(name="id")
	private int user_id;
	
	@Column(name="name")
	private String user_name;
	
	@Column(name="email")
	private String user_email;
	
	@Column(name="dept")
	private String user_dept;
	
	@Column(name="user_sr_number")
	private int user_login_id;
	
	@Column(name="mobile_number")
	private long user_mobile_number;

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_dept() {
		return user_dept;
	}

	public void setUser_dept(String user_dept) {
		this.user_dept = user_dept;
	}

	public long getUser_mobile_number() {
		return user_mobile_number;
	}

	public void setUser_mobile_number(long user_mobile_number) {
		this.user_mobile_number = user_mobile_number;
	}

	public ProfileEntity() {
		System.out.println("profile entity is created no argument ctor");
		// TODO Auto-generated constructor stub
	}

	public int getUser_login_id() {
		return user_login_id;
	}

	public void setUser_login_id(int user_login_id) {
		this.user_login_id = user_login_id;
	}

	public ProfileEntity(int user_id, String user_name, String user_email, String user_dept,
			int user_login_id, int user_mobile_number) {
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_email = user_email;
		this.user_dept = user_dept;
		this.user_login_id = user_login_id;
		this.user_mobile_number = user_mobile_number;
	}

	
	
	

}
