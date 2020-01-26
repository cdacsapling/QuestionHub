package exam.hello;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceLayerClass {
	@Autowired
	private ModuleRepo module_repo_obj;
	
	@Autowired
	private CredentialEntityRepo credential_Repo_obj;
	
	@Autowired
	private ProfileRepo profile_repo_obj;

	@Autowired
	private QuestionRepo question_repo_obj;
	
	@Autowired
	private AnswerRepo answer_repo_obj;
	
	public ServiceLayerClass()
	{
		
		//System.out.println("B object created");
	}
	
	public List<QuestionEntity> getAllQuestionList(int module_id) {
		// TODO Auto-generated method stub
		List<QuestionEntity> x = question_repo_obj.findByModuleId(module_id);
		return x;
	}

	public CredentialEntity validateUser(CredentialEntity n) {
		CredentialEntity obj = credential_Repo_obj.getLoggedInUser(n.getLogin_id());
		if(obj.getPassword().equals(n.getPassword()))
		{
				return obj;
		}
		else
		{	
			return n;
		}
		
	}


	public List<ModuleEntity> getAll() {
		// TODO Auto-generated method stub
		return module_repo_obj.findAll();
	}

	public int updateProfile(ProfileEntity profile_obj) {
		// TODO Auto-generated method stub
		if(profile_repo_obj.getProfileForUser(profile_obj.getUser_login_id()) != null)
		{
			profile_repo_obj.save(profile_obj); //change of failing is almost zero.
			return 1;
		}
		else
		{
			return 0;
		}
	}

	public ProfileEntity getProfile(int serial_number) {
		ProfileEntity obj = profile_repo_obj.getProfileForUser(serial_number);
		return obj;
	}

	public int addQuestion(QuestionEntity obj) {
		// TODO Auto-generated method stub
		
			question_repo_obj.save(obj); //change of failing is almost zero.
			return 1;
		
	}

	public List<AnswerEntity> getAllAnswers(int qstn_id) {
		// TODO Auto-generated method stub
		List<AnswerEntity> list_obj = answer_repo_obj.findAllAnswerForQstnId(qstn_id);
		return list_obj;
	}

	//need to impl few more changes
	public int addAnswer(AnswerEntity obj) {
		answer_repo_obj.save(obj);
		return 1;
		// TODO Auto-generated method stub
//		Optional<AnswerEntity> check_object = answer_repo_obj.findByserId(obj.getUser_sr_id());
//		if((!check_object.isPresent()))
//		{
//			System.out.println("coming here "+ check_object.get().getAnswer_desc());
//			answer_repo_obj.save(obj);
//			return 1;
//		}
//		else
//		{
//			System.out.println("coming here else part "+ check_object.get().getAnswer_desc());
//			return 0;
//		}
	}
	


}
