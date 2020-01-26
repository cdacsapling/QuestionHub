package exam.hello;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name= "login")
public class CredentialEntity 
{
	@Id
	@NotNull
	@Column(name="id")
	private int login_id;
	
	@Column(name="password")
	private String password;
	
	@Column(name="role")
	private String role;
	

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

	

	public CredentialEntity() {
		System.out.println("credential object is created for no argument ctor");
		// TODO Auto-generated constructor stub
	}

	public CredentialEntity(int login_id, String password, String role//, ProfileEntity profile_obj
			) {
		
		this.login_id = login_id;
		this.password = password;
		this.role = role;
		
	}
	
	
}
