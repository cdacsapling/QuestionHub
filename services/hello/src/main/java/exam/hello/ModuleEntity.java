package exam.hello;

import javax.persistence.*;

@Entity
@Table(name= "module")
public class ModuleEntity {
	
	@Id
	@Column(name="mod_id")
	private int moduleId;
	
	@Column(name="mod_name")
	private String moduleName;
	
	public int getModuleId() {
		
		return moduleId;
	}
	public void setModuleId(int moduleId) {
		this.moduleId = moduleId;
	}
	
	
	public String getModuleName() {
		return moduleName;
	}
	public void setmoduleName(String name) {
		this.moduleName = name;
	}
	
	
	
	public ModuleEntity(int mn, String name) {
		super();
		this.moduleId = mn;
		this.moduleName = name;
	}
	public ModuleEntity() {
	System.out.println("object is created for module as mobile class");		
		// TODO Auto-generated constructor stub
	}
	
	

}
