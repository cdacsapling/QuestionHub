package exam.hello;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
public class ControllerClass {
	@Autowired
	private ServiceLayerClass serive_obj;
	
	public ControllerClass()
	{
		////System.out.println("A object created");
		
	}
	
	
	//working
	@PostMapping("/checkCredential")
	public CredentialEntity validateUser(@RequestBody CredentialEntity n)//assume single select
	{
		CredentialEntity m = serive_obj.validateUser(n);
		return m;
		
	}
	
//working
	@PostMapping("/updateProfile")
	public int updateProfile(@RequestBody ProfileEntity profile_obj)//assume single select
	{
		int msg = serive_obj.updateProfile(profile_obj);
		return msg;
		
	}
	
	//working
	@GetMapping("/getProfile")
	public ProfileEntity getProfile(@RequestParam("serial_number") int serial_nmber)//assume single select
	{
		ProfileEntity obj = serive_obj.getProfile(serial_nmber);
		return obj;
		
	}
	
	//working
	@GetMapping("/getAllModules") //multiselect
	public List<ModuleEntity> get()
	{
		List<ModuleEntity> x =serive_obj.getAll();
		return x;
		
	}
	
	//working wd both
	@GetMapping("/getAllQuestions") //multiselect
	public List<QuestionEntity> getQuestionList(@RequestParam("mod_id") int module_id)
	{
		List<QuestionEntity> x = serive_obj.getAllQuestionList(module_id);
		return x;
		
	}
	
	//orking wd both
	@PostMapping("/addQuestions") //multiselect
	public int addQuestion(@RequestBody QuestionEntity obj)
	{
		int m =serive_obj.addQuestion(obj);
		return m;
		
	}
	
	//working wd both
	@GetMapping("/getAllAnswer") //multiselect
	public List<AnswerEntity> getAnswerList(@RequestParam("qstn_id") int qstn_id)
	{	
		List<AnswerEntity> x = serive_obj.getAllAnswers(qstn_id);
		return x;
		
	}
	
	//working wd both
	@PostMapping("/addAnswer") //multiselect
	public int addAnswer(@RequestBody AnswerEntity obj)
	{
		int m =serive_obj.addAnswer(obj);
		return m;
		
	}
	

	
		

}
